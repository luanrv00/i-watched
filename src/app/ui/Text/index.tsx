import type { ReactNode } from "react";

export function TextParagraph({children}: {children: ReactNode}) {
  return (
    <p className="font-thin text-sm">{children}</p>
  )
}

export function TextSubtitle({children}: {children: ReactNode}) {
  return (
    <h2 className="font-bold">{children}</h2>
  )
}
