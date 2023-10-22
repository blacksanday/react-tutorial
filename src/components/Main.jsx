import Welcome from "./welcome";
import Gallery from "./Gallery";
export default function Main() {
  return (
    <main>
      <section className="article">
        <div className="aside">
          <Welcome />
        </div>
      </section>
      <aside>
        <section className="">
          <div className="aside img">
            <Gallery />
          </div>
        </section>
      </aside>
    </main>
  );
}