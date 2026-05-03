import { Toaster as SonnerToaster, toast as sonnerToast } from "sonner";

export const toast = ({ title, description, ...rest } = {}) =>
  sonnerToast(title, { description, ...rest });

export const Toaster = (props) => (
  <SonnerToaster
    theme="dark"
    toastOptions={{
      classNames: {
        toast:
          "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
        description: "group-[.toast]:text-muted-foreground",
      },
    }}
    {...props}
  />
);
