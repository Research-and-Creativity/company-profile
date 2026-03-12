export function IconBadge({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ width: 48, height: 48, borderRadius: 14, border: "1px solid rgba(33,138,187,0.4)", background: "rgba(33,138,187,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
            {children}
        </div>
    );
}
