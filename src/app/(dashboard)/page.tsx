
"use client"

import React from "react";
import Image from "next/image";
import {
  BarChart,
  LineChart,
  DollarSign,
  CreditCard,
  Utensils,
  ShoppingBag,
  Car,
  HeartPulse,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { Bar, BarChart as RechartsBarChart, CartesianGrid, XAxis, YAxis, Line, LineChart as RechartsLineChart } from "recharts";
import type { ChartConfig } from "@/components/ui/chart"
import Link from 'next/link';

const chartData = [
  { month: "January", income: 1860, expenses: 800 },
  { month: "February", income: 3050, expenses: 2000 },
  { month: "March", income: 2370, expenses: 1200 },
  { month: "April", income: 730, expenses: 1900 },
  { month: "May", income: 2090, expenses: 1300 },
  { month: "June", income: 2140, expenses: 1100 },
];

const chartConfig = {
  income: {
    label: "Income",
    color: "hsl(var(--chart-1))",
  },
  expenses: {
    label: "Expenses",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const categories = [
  { name: "Food & Drinks", icon: Utensils, amount: "250.75" },
  { name: "Shopping", icon: ShoppingBag, amount: "520.00" },
  { name: "Transportation", icon: Car, amount: "85.50" },
  { name: "Health", icon: HeartPulse, amount: "120.00" },
  { name: "Groceries", icon: ShoppingBag, amount: "300.20" },
];

const transactions = [
    { note: "Salary", date: "2024-07-15", amount: 3500.00, type: "in" as const },
    { note: "Netflix Subscription", date: "2024-07-14", amount: -15.99, type: "out" as const },
    { note: "Grocery Shopping", date: "2024-07-13", amount: -75.40, type: "out" as const },
    { note: "Freelance Project", date: "2024-07-12", amount: 800.00, type: "in" as const },
    { note: "Dinner with friends", date: "2024-07-11", amount: -55.00, type: "out" as const },
];

export default function HomePage() {
  const [transactionFilter, setTransactionFilter] = React.useState('all');

  const filteredTransactions = React.useMemo(() => {
    return transactions.filter(t => {
      if (transactionFilter === 'in') return t.type === 'in';
      if (transactionFilter === 'out') return t.type === 'out';
      return true;
    });
  }, [transactionFilter]);

  return (
    <div className="flex flex-col gap-4 md:gap-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Balance</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Opening Balance</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$30,200.50</div>
            <p className="text-xs text-muted-foreground">As of start of the month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Income</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">+$15,031.39</div>
            <p className="text-xs text-muted-foreground">+180.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">-$2,345.12</div>
            <p className="text-xs text-muted-foreground">+32.8% from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-7">
        <Card className="col-span-1 lg:col-span-4">
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle>Monthly Transactions</CardTitle>
              <CardDescription>Income vs. Expenses for the last 6 months.</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="bar">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="bar" className="gap-1"><BarChart className="h-4 w-4"/>Bar Chart</TabsTrigger>
                <TabsTrigger value="line" className="gap-1"><LineChart className="h-4 w-4"/>Line Chart</TabsTrigger>
              </TabsList>
              <TabsContent value="bar">
                <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                  <RechartsBarChart accessibilityLayer data={chartData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      tickMargin={10}
                      axisLine={false}
                      tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <YAxis tickLine={false} axisLine={false} tickMargin={10} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Bar dataKey="income" fill="var(--color-income)" radius={4} />
                    <Bar dataKey="expenses" fill="var(--color-expenses)" radius={4} />
                  </RechartsBarChart>
                </ChartContainer>
              </TabsContent>
               <TabsContent value="line">
                <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                    <RechartsLineChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                          dataKey="month"
                          tickLine={false}
                          tickMargin={10}
                          axisLine={false}
                          tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <YAxis tickLine={false} axisLine={false} tickMargin={10} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <ChartLegend content={<ChartLegendContent />} />
                        <Line type="monotone" dataKey="income" stroke="var(--color-income)" strokeWidth={2} dot={false} />
                        <Line type="monotone" dataKey="expenses" stroke="var(--color-expenses)" strokeWidth={2} dot={false} />
                    </RechartsLineChart>
                </ChartContainer>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        
        <Card className="col-span-1 lg:col-span-3">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Your most recent transactions.</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <Tabs defaultValue="all" onValueChange={setTransactionFilter} className="w-full">
              <div className="px-6 pt-6">
                <TabsList className="grid w-full grid-cols-3 mb-4">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="in" className="text-success focus:text-success data-[state=active]:text-success data-[state=active]:border-success/30 data-[state=active]:bg-success/10">Income</TabsTrigger>
                  <TabsTrigger value="out" className="text-destructive focus:text-destructive data-[state=active]:text-destructive data-[state=active]:border-destructive/30 data-[state=active]:bg-destructive/10">Expenses</TabsTrigger>
                </TabsList>
              </div>
              <Table>
                  <TableBody>
                      {filteredTransactions.length > 0 ? filteredTransactions.map((transaction, index) => (
                          <TableRow key={index}>
                              <TableCell>
                                  <div className="font-medium">{transaction.note}</div>
                                  <div className="text-sm text-muted-foreground">{new Date(transaction.date).toLocaleDateString()}</div>
                              </TableCell>
                              <TableCell className={`text-right font-semibold ${transaction.type === 'in' ? 'text-success' : 'text-destructive'}`}>
                                  {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                              </TableCell>
                          </TableRow>
                      )) : (
                        <TableRow>
                          <TableCell colSpan={2} className="text-center h-24 text-muted-foreground">
                            No transactions for this filter.
                          </TableCell>
                        </TableRow>
                      )}
                  </TableBody>
              </Table>
            </Tabs>
          </CardContent>
          <CardFooter className="justify-center border-t p-4 mt-6">
              <Button size="sm" variant="ghost" className="w-full" asChild>
                <Link href="/add-entry">View All Transactions</Link>
              </Button>
            </CardFooter>
        </Card>
      </div>

       <Card>
        <CardHeader>
          <CardTitle>Spending by Category</CardTitle>
          <CardDescription>A summary of your spending across different categories.</CardDescription>
        </CardHeader>
        <CardContent>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {categories.map((category, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/5">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center p-6 gap-2">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <category.icon className="h-6 w-6 text-primary" />
                        </div>
                        <span className="text-lg font-semibold">${category.amount}</span>
                        <p className="text-sm text-muted-foreground">{category.name}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </CardContent>
      </Card>
    </div>
  );
}
