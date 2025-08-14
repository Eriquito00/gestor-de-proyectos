import "./styles/WarningPanel.css"

export default function WarningPanel( { title, description, withOptions, onClose, func } ) {
  return (
    <>
        <div className="overlay"></div>
        <div className="warning_panel">
            <h2 className="h2_warning_panel">{ title }</h2>
            <p className="p_warning_panel">{ description }</p>
            { withOptions ? (
                <div className="options_warning_panel">
                    <button className="button_warning_panel" onClick={func}>Si</button>
                    <button className="button_warning_panel" onClick={onClose}>No</button>
                </div>
            ) : (
                <div className="options_warning_panel">
                    <button className="button_warning_panel" onClick={onClose}>Cerrar</button>
                </div>

            )}
        </div>
    </>
  )
}