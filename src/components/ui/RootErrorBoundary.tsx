import React from "react";

export class RootErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { err?: any }
> {
  state = { err: undefined as any };

  static getDerivedStateFromError(err: any) {
    return { err };
  }

  componentDidCatch(err: any, info: any) {
    console.error("[RootError]", err, info);
  }

  render() {
    if (this.state.err) {
      return (
        <main style={{ padding: 24, fontFamily: "system-ui" }}>
          <h1>We're updating this page.</h1>
          <p>Please reload in a moment.</p>
          <button 
            onClick={() => window.location.reload()}
            style={{ 
              padding: "8px 16px", 
              marginTop: "16px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer"
            }}
          >
            Reload Page
          </button>
        </main>
      );
    }
    return this.props.children;
  }
}
