-- Drop existing policies for blog_articles
DROP POLICY IF EXISTS "Authors can insert their own articles" ON public.blog_articles;
DROP POLICY IF EXISTS "Authors can update their own articles" ON public.blog_articles;
DROP POLICY IF EXISTS "Authors can delete their own articles" ON public.blog_articles;

-- Create function to check if user is admin
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN (
    SELECT role FROM public.profiles 
    WHERE user_id = auth.uid() 
    AND role = 'admin'
  ) IS NOT NULL;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create new policies for blog_articles - only admins can create, update, delete
CREATE POLICY "Only admins can insert articles" 
ON public.blog_articles 
FOR INSERT 
WITH CHECK (public.is_admin());

CREATE POLICY "Only admins can update articles" 
ON public.blog_articles 
FOR UPDATE 
USING (public.is_admin());

CREATE POLICY "Only admins can delete articles" 
ON public.blog_articles 
FOR DELETE 
USING (public.is_admin());

-- Update the profiles table to set the first user as admin
-- This will make the first person who logs in an admin
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, full_name, role)
  VALUES (
    NEW.id, 
    NEW.raw_user_meta_data->>'full_name',
    CASE 
      WHEN (SELECT COUNT(*) FROM public.profiles) = 0 THEN 'admin'
      ELSE 'user'
    END
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;