"use client"

import { useState } from "react"
import Image from "next/image"
import type { MenuItem } from "@/lib/menu-types"

interface ItemRowProps {
  item: MenuItem
}

export default function ItemRow({ item }: ItemRowProps) {
  const [note, setNote] = useState("")

  const formatPrice = (price: string) => {
    if (price.includes("/")) {
      const [small, large] = price.split("/")
      return (
        <div className="flex items-baseline gap-2">
          <span className="text-xs text-muted-foreground">small/large</span>
          <span className="font-semibold text-primary">₹{small}</span>
          <span className="text-muted-foreground">/</span>
          <span className="font-semibold text-primary">₹{large}</span>
        </div>
      )
    }
    return <span className="font-semibold text-primary">₹{price}</span>
  }

  return (
    <div className="border-b border-border pb-4 mb-4 last:border-b-0 last:mb-0">
      <div className="flex gap-4 mb-2">
        {item.image && (
          <div className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden">
            <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" sizes="80px" />
          </div>
        )}
        <div className="flex-1 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
          <div>
            <h4 className="font-semibold text-slate-900 text-base leading-snug">{item.name}</h4>
          </div>
          <div className="sm:text-right">{formatPrice(item.price)}</div>
        </div>
      </div>
      {/* <input
        type="text"
        placeholder="Add a note..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="text-sm w-full px-3 py-1 bg-input border border-border rounded-lg text-slate-900 placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
      /> */}
    </div>
  )
}
