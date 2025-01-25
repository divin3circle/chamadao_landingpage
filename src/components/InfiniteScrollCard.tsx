import { InfiniteMovingCards } from "./InfiniteSroll";

export function InfiniteScroll() {
  return (
    <div className="rounded-md flex flex-col antialiased items-center mt-8 justify-center relative overflow-hidden">
      <InfiniteMovingCards img="/scroll.svg" direction="right" speed="normal" />
    </div>
  );
}
