class CommentsController < ApplicationController

  def index
  end

  def some
    sleep 10;
    js_notify(message: 'A request has reach the controller', type: 'error', position: :top) #=> SrBuj Method
    render nothing: true, content_type: 'text/html'
  end

end
