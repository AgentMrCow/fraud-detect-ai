"use client"

import { CreditCard, ExternalLink, Flag, MoreHorizontal, ShieldAlert, ShieldCheck } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Generate random transaction data
const generateTransactions = (count = 10) => {
  const types = ["Purchase", "Withdrawal", "Transfer", "Deposit", "Payment"]
  const merchants = [
    "Amazon",
    "Walmart",
    "Apple",
    "Netflix",
    "Uber",
    "DoorDash",
    "Target",
    "Best Buy",
    "Steam",
    "PayPal",
  ]
  const locations = ["New York, US", "London, UK", "Tokyo, JP", "Sydney, AU", "Berlin, DE", "Paris, FR", "Toronto, CA"]
  const statuses = ["Approved", "Blocked", "Flagged", "Reviewing"]
  const riskLevels = ["Low", "Medium", "High", "Critical"]

  return Array.from({ length: count }).map(() => {
    const type = types[Math.floor(Math.random() * types.length)]
    const merchant = merchants[Math.floor(Math.random() * merchants.length)]
    const amount = (Math.random() * 1000).toFixed(2)
    const date = new Date()
    date.setHours(date.getHours() - Math.floor(Math.random() * 72))
    const location = locations[Math.floor(Math.random() * locations.length)]
    const status = statuses[Math.floor(Math.random() * statuses.length)]
    const riskLevel = riskLevels[Math.floor(Math.random() * riskLevels.length)]
    const riskScore = Math.floor(Math.random() * 100)

    return {
      id: `TRX-${Math.floor(Math.random() * 10000)}`,
      type,
      merchant,
      amount,
      date,
      location,
      status,
      riskLevel,
      riskScore,
    }
  })
}

interface TransactionTableProps {
  extended?: boolean
}

export default function TransactionTable({ extended = false }: TransactionTableProps) {
  const transactions = generateTransactions(extended ? 10 : 5)

  return (
    <TooltipProvider>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Transaction ID</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Merchant</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead>Date</TableHead>
            {extended && <TableHead>Location</TableHead>}
            <TableHead>Status</TableHead>
            <TableHead>Risk</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell className="font-medium">{transaction.id}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                  <span>{transaction.type}</span>
                </div>
              </TableCell>
              <TableCell>{transaction.merchant}</TableCell>
              <TableCell className="text-right">${transaction.amount}</TableCell>
              <TableCell>{transaction.date.toLocaleString()}</TableCell>
              {extended && <TableCell>{transaction.location}</TableCell>}
              <TableCell>
                <Badge
                  variant={
                    transaction.status === "Approved"
                      ? "outline"
                      : transaction.status === "Blocked"
                        ? "destructive"
                        : transaction.status === "Flagged"
                          ? "secondary"
                          : "default"
                  }
                  className="flex w-fit items-center gap-1"
                >
                  {transaction.status === "Approved" ? (
                    <ShieldCheck className="h-3 w-3" />
                  ) : transaction.status === "Blocked" ? (
                    <ShieldAlert className="h-3 w-3" />
                  ) : (
                    <Flag className="h-3 w-3" />
                  )}
                  {transaction.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Badge
                      variant={
                        transaction.riskLevel === "Low"
                          ? "outline"
                          : transaction.riskLevel === "Medium"
                            ? "secondary"
                            : transaction.riskLevel === "High"
                              ? "default"
                              : "destructive"
                      }
                    >
                      {transaction.riskLevel}
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Risk Score: {transaction.riskScore}/100</p>
                  </TooltipContent>
                </Tooltip>
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">More options</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View details
                    </DropdownMenuItem>
                    <DropdownMenuItem>Flag as suspicious</DropdownMenuItem>
                    <DropdownMenuItem>Block transaction</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TooltipProvider>
  )
}

