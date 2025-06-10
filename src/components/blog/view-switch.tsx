import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";

export type ViewType = "grid" | "list";

interface ViewComboboxProps {
  view: ViewType;
  onViewChange: (view: ViewType) => void;
}

export function ViewCombobox({ view, onViewChange }: ViewComboboxProps) {
  const [open, setOpen] = useState(false);

  const viewOptions = [
    { value: "grid" as ViewType, label: "Grid View" },
    { value: "list" as ViewType, label: "List View" },
  ];

  const currentView = viewOptions.find((option) => option.value === view);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between border-none bg-bg3 hover:bg-bg3/70 text-white"
        >
          {currentView?.label || "Choose a view"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent sideOffset={0} className="w-[200px] p-0">
        <Command className="bg-bg3">
          <CommandList>
            <CommandEmpty>No view found.</CommandEmpty>
            <CommandGroup>
              {viewOptions.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={() => {
                    onViewChange(option.value);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={`mr-2 h-4 w-4 ${view === option.value ? "opacity-100" : "opacity-0"
                      }`}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}


