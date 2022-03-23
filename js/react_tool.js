class ReactApp extends React.Component {
  constructor(props) {
      super(props);
  }
  editor(){
    return(
      <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>Modal body text goes here.</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Close</Button>
    <Button variant="primary">Save changes</Button>
  </Modal.Footer>
</Modal.Dialog>
    )
  }

  render(){
      return (
          this.editor()
      );
  }
}
