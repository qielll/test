import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "./button";
import StoryForm from "./form";

export default function Modal() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="text-white rounded-3xl text-md p-5">Bagikan Cerita</Button>
      </DialogTrigger>
      <DialogContent className="bg-white border-0">
        <StoryForm />
      </DialogContent>
    </Dialog>
  );
}
