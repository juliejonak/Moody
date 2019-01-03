export const Mood = (props) => {
  return (
    <div className="box box1">
      <span className="form-text">How do you feel today?</span>
      <form>
          <span className="mood far fa-sad-cry" id="angry" name="mood" value=1></span>
          <span className="mood far fa-frown" id="sad" name="mood" value=2></span>
          <span className="mood far fa-meh-blank" id="neutral" name="mood" value=3></span>
          <span className="mood far fa-smile" id="happy" name="mood" value=4></span>
          <span className="mood far fa-grin-beam" id="thrilled" name="mood" value=5><span>
        </form>
      </div>
  )
}
