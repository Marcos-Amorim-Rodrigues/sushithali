"use client"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/stores/cart-store";
import { CartItem } from "@/components/cart/item";
import { useState } from "react";
import { CheckoutDialog } from "@/components/checkout/dialog";

export const CartSidebar = () =>{
  const [ checkoutOpen, setCheckoutOpen] = useState(false);

  const { cart, upsertCartItem } = useCartStore(state => state);

  let subtotal = 0;
  for(let item of cart){
    subtotal += item.quantity * item.product.price;
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="relative">
          <RocketIcon className="mr-2"/><p>Cart</p>
          {cart.length > 0 &&
            <div className="absolute size-3 bg-red-600 rounded-full -right-1 -top-1"></div>
          }
        </ Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
          <SheetDescription>
            Are u hungry? We're comming!
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-5 my-3">
          {cart.map(item => (
            <CartItem key={item.product.id} item={item} />
          ))}
        </div>
        <Separator className="my-4" />
        <div className="flex justify-between items-center text-xs">
          <div>Subtotals:</div>
          <div>$ {subtotal.toFixed(2)}</div>
        </div>
        <Separator className="my-4" />
        <div className="text-center">
          <Button
            onClick={() => setCheckoutOpen(true)}
            disabled={cart.length === 0}
          >
            Purchase
          </Button>
        </div>
        <CheckoutDialog
          open={checkoutOpen}
          onOpenChange={setCheckoutOpen}
        />
      </SheetContent>
    </Sheet>
  );
}