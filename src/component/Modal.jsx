
export default function Modal({name,films,onClose}){


    return (
      <div className="modal-container">
        <div className="modal">
          <div className="modal-header">
            <p className="close" onClick={()=>onClose()} >&times;</p>
          </div>
          <div className="modal-content">
            <>
              {`${name} has appeared in the following films: ${films}`}
            </>
          </div>
          
        </div>
      </div>
    );
}