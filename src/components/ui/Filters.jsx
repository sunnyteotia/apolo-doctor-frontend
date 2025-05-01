import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

export default function Filters({ filters, setFilters }) {
  return (
    <div className="space-y-4">
      <div>
        <Label>Experience (Min Years)</Label>
        <Slider
          min={0}
          max={30}
          step={1}
          value={[filters.experienceMin]}
          onValueChange={(val) => setFilters((f) => ({ ...f, experienceMin: val[0] }))}
        />
      </div>
      <div>
        <Label>Consultation Fees (Max ₹)</Label>
        <Slider
          min={100}
          max={2000}
          step={100}
          value={[filters.feesMax]}
          onValueChange={(val) => setFilters((f) => ({ ...f, feesMax: val[0] }))}
        />
      </div>
      <div>
        <Label>Rating (Min)</Label>
        <Slider
          min={0}
          max={5}
          step={0.5}
          value={[filters.ratingMin]}
          onValueChange={(val) => setFilters((f) => ({ ...f, ratingMin: val[0] }))}
        />
      </div>
    </div>
  );
}
