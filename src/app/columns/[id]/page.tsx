import Link from 'next/link';
import { notFound } from 'next/navigation';
import inner from '../../inner.module.css';
import { columns } from '@/data/columns';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const column = columns.find(c => c.id === resolvedParams.id);
  if (!column) return { title: '칼럼을 찾을 수 없습니다.' };
  return {
    title: `${column.title} | 정훈컬럼`,
    description: column.content.replace(/<[^>]+>/g, '').substring(0, 100),
  };
}

export async function generateStaticParams() {
  return columns.map((col) => ({
    id: col.id,
  }));
}

export default async function ColumnDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const column = columns.find(c => c.id === resolvedParams.id);
  
  if (!column) {
    notFound();
  }

  return (
    <>
      <div className={inner.pageHeader}>
        <div className="container">
          <div className={inner.breadcrumb}>
            <Link href="/">HOME</Link> <span>›</span> <Link href="/columns">정훈컬럼</Link> <span>›</span> <span>{column.title}</span>
          </div>
        </div>
      </div>
      <div className={inner.divider} style={{ margin: 0 }}></div>

      <section style={{ padding: '60px 0 100px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <header style={{ borderBottom: '1px solid #eee', paddingBottom: '30px', marginBottom: '40px' }}>
            <h1 style={{ fontSize: '28px', lineHeight: 1.4, marginBottom: '15px', color: '#111' }}>{column.title}</h1>
            <div style={{ color: '#666', fontSize: '15px' }}>
              <span style={{ marginRight: '15px' }}>작성일: {column.date}</span>
            </div>
          </header>
          
          <div 
            style={{ fontSize: '16px', lineHeight: 1.8, color: '#333' }}
            dangerouslySetInnerHTML={{ __html: column.content }}
          />

          <div style={{ marginTop: '60px', textAlign: 'center' }}>
            <Link 
              href="/columns" 
              style={{ 
                display: 'inline-block', 
                padding: '12px 30px', 
                backgroundColor: '#111', 
                color: '#fff', 
                textDecoration: 'none',
                borderRadius: '4px',
                fontWeight: 500
              }}
            >
              목록으로
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
