import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md px-2 py-0.5 font-mono text-[10.5px] font-semibold uppercase tracking-wider",
  {
    variants: {
      variant: {
        brand: "bg-brand-tint text-brand-deep",
        warm: "bg-warm-tint text-warm",
        outline: "border border-border text-muted-foreground",
      },
    },
    defaultVariants: { variant: "brand" },
  },
);

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants>;

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
