class Api::UsersController < ApplicationController

  def index
    users = User.all
    render json: {users: users}
  end

  def create
    newUser = User.create(user_params)
    render json: newUser
  end

  # def show
  #   user = User.find(params[:id])
  #   render json: user
  # end
  #
  # def update
  #   user = User.find(params[:id])
  #   user.update(user_params)
  #   render json: user
  # end

  def destroy
    user = User.destroy(params[:id])
    render json: user
  end

  private

  def user_params
    params.require(:user).permit(:firstname, :lastname, :email, :book, :review)
  end

end
