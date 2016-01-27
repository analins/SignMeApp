class Api::UsersController < ApplicationController
  def index
    dbUsers = User.all
    render json: {users:dbUsers}
  end
end
