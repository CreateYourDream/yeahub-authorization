const isDev = import.meta.env.DEV;

export const logger = {
  error: (message: string, error?: unknown, context?: Record<string, unknown>) => {
    if (!isDev) {
      return;
    }

    if (context) {
      console.error(`[app] ${message}`, { error, ...context });
      return;
    }

    console.error(`[app] ${message}`, error);
  },
};
