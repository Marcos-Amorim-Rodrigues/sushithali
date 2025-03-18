import { useCheckoutStore } from "@/stores/checkout-store";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { generateMessage } from "@/lib/generate-message";

export const StepFinish = () => {
  const { name } = useCheckoutStore(state => state);

  const message = generateMessage();
  const linkZap = `https://wa.me/${process.env.NEXT_PUBLIC_ZAP}?text=${encodeURI(message)}`;

  return (
    <div className="text-center flex flex-col gap-5">
      <p>Great, <strong>{name}</strong>!</p>
      <p>Now, send it to WhatsApp, so we're going to prepare everything to you!</p>
      <Button>
        <Link target="_blank" href={linkZap}>Send to WhatsApp</Link>
      </Button>
    </div>
  );
}