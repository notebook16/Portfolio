import {motion} from 'framer-motion';

import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';


// A Higher-Order Component is essentially a function that takes a component and returns a new component. 
// This new component usually adds extra functionality or behavior (like animations, data fetching, styling, etc.) around the original one.

const SectionWrapper = (Component , idName) => 
    function HOC() {
        return(
            <motion.section
            variants={staggerContainer()}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.25 }}
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
                <span className='hash-span' id={idName}>
                        &nbsp;
                </span>
                
            {/* the above will ne executed first and then component will render     */}
                <Component/>
            </motion.section>
        )
    }


export default SectionWrapper;    
