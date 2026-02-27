import { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
  name?: string;
  fallback?: ReactNode;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    // Если произошла ошибка, меняем стейт, чтобы показать запасной UI
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // В энтерпрайзе здесь отправляют ошибку в Sentry, Datadog или другой логгер
    console.error(
      `[React Bridge] Ошибка в компоненте ${this.props.name || "Unknown"}:`,
      error,
      info,
    );
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      } else {
        return (
          <div
            style={{
              padding: "10px",
              border: "1px solid red",
              color: "red",
              borderRadius: "4px",
            }}
          >
            ⚠️ Не удалось загрузить модуль <b>{this.props.name}</b>.
            <button
              onClick={() => this.setState({ hasError: false })}
              style={{ marginLeft: "10px" }}
            >
              Попробовать снова
            </button>
          </div>
        );
      }
    }
    return this.props.children;
  }
}
