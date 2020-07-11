import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <Card>
        <CardImg width='100%' object src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  } else {
    return <div></div>;
  }
}

function RenderComments({ comments }) {
  if (comments.length !== 0) {
    return (
      <div>
        <h4>Comments</h4>
        <ul className='list-unstyled'>
          {comments.map((comment) => {
            return (
              <li key={comment.id}>
                {comment.comment} <br />
                -- {comment.author} ,{' '}
                {new Intl.DateTimeFormat('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: '2-digit',
                }).format(new Date(Date.parse(comment.date)))}{' '}
                <br />
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return <div></div>;
  }
}

const Dishdetail = (props) => {
  if (props.dish !== null && props.dish !== undefined) {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-5 m-1'>
            <RenderDish dish={props.dish} />
          </div>
          <div className='col-12 col-md-5 m-1'>
            <RenderComments comments={props.dish.comments} />
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Dishdetail;