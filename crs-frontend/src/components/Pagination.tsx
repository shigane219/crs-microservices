// path: crs-frontend/src/components/Pagination.tsx
// purpose: dieu huong trang, dung chung cho moi man hinh danh
// sach co phan trang trong he thong

interface PaginationProps {
  currentPage: number; // bat dau tu 0, dung dinh dang giong Spring Data Pageable
  totalPages: number;
  onPageChange: (page: number) => void;
}

const btnBase: React.CSSProperties = {
  padding: '4px 10px',
  cursor: 'pointer',
  background: '#333',
  color: '#fff',
  border: '1px solid #555',
  borderRadius: 4,
};

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i);

  return (
    <div style={{ display: 'flex', gap: 6, marginTop: 20 }}>
      <button
        disabled={currentPage === 0}
        onClick={() => onPageChange(currentPage - 1)}
        style={{ ...btnBase, opacity: currentPage === 0 ? 0.4 : 1 }}
      >
        « Trang truoc
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          style={{
            ...btnBase,
            background: p === currentPage ? '#555' : '#333',
            fontWeight: p === currentPage ? 'bold' : 'normal',
            textDecoration: p === currentPage ? 'underline' : 'none',
          }}
        >
          {p + 1}
        </button>
      ))}

      <button
        disabled={currentPage >= totalPages - 1}
        onClick={() => onPageChange(currentPage + 1)}
        style={{ ...btnBase, opacity: currentPage >= totalPages - 1 ? 0.4 : 1 }}
      >
        Trang sau »
      </button>
    </div>
  );
}

