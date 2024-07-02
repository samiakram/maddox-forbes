export default function ApplyNow({
  classes = "",
  color = "navy",
  href = "",
}: {
  classes?: string;
  color?: string;
  href?: string;
}) {
  return (
    <>
      <h1
        className={`text-2xl font-bold text-center font-[felix] text-${color} ${classes}`}
      >
        <a href={href}>Apply Now</a>
      </h1>
    </>
  );
}
