import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const RatingInput = ({
  name,
  labelText,
}: {
  name: string;
  labelText?: string;
}) => {
  const numbers = Array.from({ length: 5 }, (_, i) => {
    const value = i + 1;
    return value.toString();
  }).reverse();

  return (
    <div className="mb-2 max-w-xs">
      <label htmlFor={name} className="capitalize">
        {labelText || name}
      </label>
      <Select defaultValue={numbers[0]} name={name} required>
        <SelectTrigger className="w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {numbers.map((number) => {
            return (
              <SelectItem key={number} value={number}>
                {number}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};

export default RatingInput;
