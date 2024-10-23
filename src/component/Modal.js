import './cssFile/madal.css'

export default function Moda({isVisible, errorMsg=null}){
    if(isVisible){
        return (
        <article className='popub'>
            <div className='popub-content'>
                {/* <h1>The Form has been submitted successfully   </h1> */}
                    <h1 style={{color:errorMsg != null?"red":"green"}}>
                    {errorMsg != null ?errorMsg : "The Form has been submitted successfully"}
                    </h1>
            </div>
        </article>
    );
    }else{
        return (
        <>
            
        </>
        )
    }
    
}