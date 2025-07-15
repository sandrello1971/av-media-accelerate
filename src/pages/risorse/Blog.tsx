import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Loader2, Calendar, User, Edit } from 'lucide-react';

interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  published: boolean;
  published_at: string;
  created_at: string;
  author_id: string;
  profiles?: {
    full_name: string;
  } | null;
}

const Blog = () => {
  const [articles, setArticles] = useState<BlogArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    fetchArticles();
    checkAdminStatus();
  }, [user]);

  const checkAdminStatus = async () => {
    if (!user) {
      setIsAdmin(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('role')
        .eq('user_id', user.id)
        .single();

      if (error) {
        console.error('Error checking admin status:', error);
        setIsAdmin(false);
      } else {
        setIsAdmin(data?.role === 'admin');
      }
    } catch (error) {
      console.error('Error checking admin status:', error);
      setIsAdmin(false);
    }
  };

  const fetchArticles = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_articles')
        .select('*')
        .eq('published', true)
        .order('published_at', { ascending: false });

      if (error) throw error;
      setArticles(data || []);
    } catch (error) {
      console.error('Error fetching articles:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('it-IT', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Blog</h1>
            <p className="text-lg text-muted-foreground">
              Insights, guide e novità sul mondo dell'intelligenza artificiale per le PMI
            </p>
          </div>
          {isAdmin && (
            <Button asChild>
              <Link to="/admin/blog">
                <Edit className="mr-2 h-4 w-4" />
                Gestisci Blog
              </Link>
            </Button>
          )}
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        ) : articles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              Nessun articolo pubblicato al momento.
            </p>
            {isAdmin && (
              <Button asChild className="mt-4">
                <Link to="/admin/blog">
                  Pubblica il primo articolo
                </Link>
              </Button>
            )}
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Card key={article.id} className="h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">Blog</Badge>
                    <span className="text-sm text-muted-foreground">
                      {formatDate(article.published_at)}
                    </span>
                  </div>
                  <CardTitle className="text-xl line-clamp-2">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {article.excerpt || truncateText(article.content, 150)}
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <User className="mr-1 h-3 w-3" />
                    <span>Autore</span>
                    <Calendar className="ml-4 mr-1 h-3 w-3" />
                    <span>{formatDate(article.created_at)}</span>
                  </div>
                  <Button variant="outline" className="w-full mt-auto">
                    Leggi di più
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

      </div>
    </Layout>
  );
};

export default Blog;