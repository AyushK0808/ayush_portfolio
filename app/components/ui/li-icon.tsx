import React from 'react';
import { motion,useScroll } from 'framer-motion';

const Li_Icon = () => {
    const ref = React.useRef(null);
  const {scrollYProgress} = useScroll(
    {
      target: ref,
      offset: ['center end', 'center center']
    }
  );
    return ( 
        <figure className="absolute left-0 ">
            <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
                <circle cx="75" cy="50" r="20" className="stroke-purple-600 stroke-1 fill-none "/>
                <motion.circle cx="75" cy="50" r="20" className="stroke-[5px] fill-light"
                style={{
                    pathLength: scrollYProgress
                }}
                
                />
                <circle cx="75" cy="50" r="10"  className="stroke-1 fill-purple-300 animate-pulse" />
            </svg>
        </figure>
     );
}
 
export default Li_Icon;