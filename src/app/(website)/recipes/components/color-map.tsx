import { AnimatedGroup } from '@/components/ui/animated-group';
import { getRecipeDots } from '../action/action';
import ColorChart from './color-chart';
import { memo } from 'react';

const ColorMap = async () => {
  const recipes = await getRecipeDots();
  return (
    <AnimatedGroup>
      <div className="flex items-center w-full min-h-[calc(100vh-66px)]">
        <div className="relative bg-transparent flex-1 w-full">
          <h1 className='text-primary font-bold text-3xl text-center'>Choose Your Color</h1>
          <ColorChart recipes={recipes || []} />
        </div>
      </div>
    </AnimatedGroup>
  )
}

export default memo(ColorMap);
