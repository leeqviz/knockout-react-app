import { Component, type ErrorInfo, type ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  name?: string;
  fallback?: ReactNode;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  { hasError: boolean }
> {
  public override state = { hasError: false };

  public static getDerivedStateFromError() {
    return { hasError: true };
  }

  public override componentDidCatch(error: Error, info: ErrorInfo) {
    // Logging
    console.error(
      `[React Bridge] Error in component ${this.props.name || 'Unknown'}:`,
      error,
      info,
    );
  }

  public override render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      } else {
        return (
          <div
            style={{
              padding: '10px',
              border: '1px solid red',
              color: 'red',
              borderRadius: '4px',
            }}
          >
            ⚠️ Error in <b>{this.props.name}</b>.
            <button
              onClick={() => this.setState({ hasError: false })}
              style={{ marginLeft: '10px' }}
            >
              Try again
            </button>
          </div>
        );
      }
    }
    return this.props.children;
  }
}
