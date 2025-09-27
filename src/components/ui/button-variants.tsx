import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Standardized button variants for consistency
export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 touch-manipulation min-h-[48px] min-w-[48px]",
  {
    variants: {
      variant: {
        default: "bg-slate-800 text-white hover:bg-slate-700 shadow-lg hover:shadow-xl transform hover:scale-105",
        destructive: "bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-xl transform hover:scale-105",
        outline: "border-2 border-slate-300 bg-transparent text-slate-700 hover:bg-slate-100 hover:border-slate-400 shadow-lg hover:shadow-xl transform hover:scale-105",
        secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200 shadow-lg hover:shadow-xl transform hover:scale-105",
        ghost: "hover:bg-slate-100 hover:text-slate-900",
        link: "text-blue-600 underline-offset-4 hover:underline",
        // AI-themed variants
        cta: "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 relative overflow-hidden",
        ai: "bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-cyan-600 hover:via-blue-600 hover:to-purple-600 text-white shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 relative overflow-hidden",
        premium: "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 relative overflow-hidden"
      },
      size: {
        default: "h-12 px-6 py-3 text-base",
        sm: "h-10 px-4 py-2 text-sm",
        lg: "h-14 px-8 py-4 text-lg",
        xl: "h-16 px-10 py-5 text-xl",
        icon: "h-12 w-12 p-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonVariantsProps extends VariantProps<typeof buttonVariants> {
  className?: string;
}

// Consistent button wrapper
export const ConsistentButton = ({ className, variant, size, ...props }: ButtonVariantsProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
};
