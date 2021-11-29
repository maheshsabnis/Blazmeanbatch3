import React,{Fragment, Suspense} from 'react';

// Suspense: Its is fallback container that will render the component
// which will be loaded at runtime using lazy-loading

// lazy load the component
const DepartmentComponent =  React.lazy(()=> 
    import("./../useeffectdemocomponent/departmentcomponent"));


const LazyLoadComponent=()=>{

    return(
         <Fragment>
             <Suspense
               fallback ={
                   <div className="container">
                       Waiting for the Component's availability
                   </div>
               }
             >
                 {/* If the component is available it will be loaded */}
                 <section>
                     <DepartmentComponent></DepartmentComponent>
                 </section>
             </Suspense>
         </Fragment>
    );
};

export default LazyLoadComponent;