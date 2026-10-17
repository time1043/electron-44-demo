import { Smiley, Heart, Horse } from '@phosphor-icons/react';

export default function Home() {
  return (
    <div className="p-2">
      <h1 className="text-3xl text-red-400">Home</h1>
      <p className="underline">This is the home page</p>

      <div className="aura">
        <div className="card bg-base-100">
          <div className="card-body">
            <p>This card has aura</p>
          </div>
        </div>
      </div>

      <div>
        <Smiley />
        <Heart size={32} color="hotpink" weight="fill" />
        <Horse weight="duotone" />
      </div>
    </div>
  );
}
