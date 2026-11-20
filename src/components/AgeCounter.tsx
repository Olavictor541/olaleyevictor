import { useEffect, useState } from "react";

/**
 * Age in years with 9 decimals, ticking live. The decimal part is how far
 * we are between the last birthday and the next one, so it reaches the
 * next whole number exactly on the birthday.
 */
function ageAt(birth: Date, now: Date) {
  let years = now.getFullYear() - birth.getFullYear();
  const birthdayThisYear = new Date(now.getFullYear(), birth.getMonth(), birth.getDate());
  if (now < birthdayThisYear) years -= 1;
  const last = new Date(birth.getFullYear() + years, birth.getMonth(), birth.getDate());
  const next = new Date(birth.getFullYear() + years + 1, birth.getMonth(), birth.getDate());
  return years + (now.getTime() - last.getTime()) / (next.getTime() - last.getTime());
}

export function AgeCounter({ birthDate }: { birthDate: string }) {
  const [y, m, d] = birthDate.split("-").map(Number);
  const birth = new Date(y, m - 1, d);
  const [age, setAge] = useState(() => ageAt(birth, new Date()));

  useEffect(() => {
    let frame = 0;
    const tick = () => {
      setAge(ageAt(birth, new Date()));
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // birth is derived from birthDate
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [birthDate]);

  return (
    <span className="font-mono text-[16px] font-medium tabular-nums text-title" title={`Born ${birth.toDateString()}`}>
      {age.toFixed(9)}
    </span>
  );
}
