interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, totalItems, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex md:flex-row items-center justify-center md:justify-end mt-12 gap-4">

      {/* Total items */}
      <div style={{
        padding: "6px 14px", borderRadius: 100,
        border: "1px solid rgba(33,138,187,0.2)",
        background: "rgba(33,138,187,0.06)",
      }}>
        <p style={{ color: "rgba(50,70,100,0.6)", fontSize: "0.8rem", fontWeight: 600 }}>
          Total{" "}
          <span style={{ color: "#218ABB", fontWeight: 800 }}>{totalItems}</span>{" "}
          Items
        </p>
      </div>

      <div className="flex items-center gap-2">
        {/* Prev button */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          style={{
            width: 36, height: 36, borderRadius: "50%",
            border: "1.5px solid rgba(33,138,187,0.18)",
            background: "rgba(255,255,255,0.8)",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: currentPage === 1 ? "not-allowed" : "pointer",
            opacity: currentPage === 1 ? 0.35 : 1,
            transition: "border-color 0.2s, background 0.2s, box-shadow 0.2s",
            boxShadow: "0 2px 8px rgba(4,8,80,0.05)",
          }}
          onMouseEnter={e => {
            if (currentPage !== 1) {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(33,138,187,0.45)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 12px rgba(33,138,187,0.15)";
            }
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(33,138,187,0.18)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(4,8,80,0.05)";
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#218ABB" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        {/* Page numbers */}
        <div className="flex gap-1">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => onPageChange(i + 1)}
              style={{
                width: 36, height: 36, borderRadius: "50%",
                border: currentPage === i + 1 ? "1.5px solid #218ABB" : "1.5px solid rgba(33,138,187,0.15)",
                background: currentPage === i + 1
                  ? "linear-gradient(135deg, #218ABB, #1a6e96)"
                  : "rgba(255,255,255,0.8)",
                color: currentPage === i + 1 ? "white" : "rgba(50,70,100,0.65)",
                fontSize: "0.82rem", fontWeight: 800,
                cursor: "pointer",
                boxShadow: currentPage === i + 1
                  ? "0 4px 16px rgba(33,138,187,0.35)"
                  : "0 2px 8px rgba(4,8,80,0.05)",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => {
                if (currentPage !== i + 1) {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(33,138,187,0.4)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(33,138,187,0.07)";
                }
              }}
              onMouseLeave={e => {
                if (currentPage !== i + 1) {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(33,138,187,0.15)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.8)";
                }
              }}
            >
              {i + 1}
            </button>
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          style={{
            width: 36, height: 36, borderRadius: "50%",
            border: "1.5px solid rgba(33,138,187,0.18)",
            background: "rgba(255,255,255,0.8)",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: currentPage === totalPages ? "not-allowed" : "pointer",
            opacity: currentPage === totalPages ? 0.35 : 1,
            transition: "border-color 0.2s, background 0.2s, box-shadow 0.2s",
            boxShadow: "0 2px 8px rgba(4,8,80,0.05)",
          }}
          onMouseEnter={e => {
            if (currentPage !== totalPages) {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(33,138,187,0.45)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 12px rgba(33,138,187,0.15)";
            }
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(33,138,187,0.18)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(4,8,80,0.05)";
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#218ABB" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}