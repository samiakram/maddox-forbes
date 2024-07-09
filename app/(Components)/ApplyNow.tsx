export default function ApplyNow({
  classes = "",
  color = "navy",
  href = "https://181106.my1003app.com/2296421/register",
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
        <a href={href} target="_blank">
          Apply Now
        </a>
      </h1>
    </>
  );
}
