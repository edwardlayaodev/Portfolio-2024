import Image from "next/image";

export default function Home() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="mockup-code text-left w-1/2">
        <pre data-prefix="$" className="text-primary"><code>helloGreeting()</code></pre>
        <pre data-prefix=">"><code>Greetings!, my name Is Edward Layao!</code></pre>
      </div>
    </div>
  );
}
