import { useState, type FormEvent, type ChangeEvent } from 'react';
import { usePlayers } from '@/contexts/PlayersContext';
import { PlusCircle } from 'iconoir-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

export const NewPlayerForm = () => {
  const { addNewPlayer } = usePlayers();
  const [input, setInput] = useState({
    name: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInput(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input.name) return;

    addNewPlayer(input.name);
    setInput({ name: '' });
  };

  return (
    <form
      className="relative flex w-full shadow-sm rounded-md mt-6"
      onSubmit={handleSubmit}
    >
      <Input
        className="border-app-blue border rounded-r-none border-r-none text-app-blue shadow-none placeholder:text-neutral-400"
        name="name"
        type="text"
        value={input.name}
        onChange={handleChange}
        placeholder="Add player..."
        maxLength={12}
      />
      <Button className="bg-app-blue rounded-l-none shadow-none" type="submit">
        Add
        <PlusCircle />
      </Button>
    </form>
  );
};
