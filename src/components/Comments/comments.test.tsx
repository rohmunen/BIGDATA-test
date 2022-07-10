import React from 'react'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Comments } from '.'
import axios from 'axios';

jest.mock('uuid', () => ({ v4: () => '00000000-0000-0000-0000-000000000000' }));

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('rendering moviecard', () => {
  test('check render result', () => {
    render(<Comments movieId={20} open={ true } />)
    const authorInput = screen.getByTestId('nickname-input')
    expect(authorInput).toBeInTheDocument();
  })

  test('check inputs', async () => {
    render(<Comments movieId={20} open={ true } />)
    const nicknameInput = screen.getByTestId('nickname-input')
    const messageInput = screen.getByTestId('message-input')
    await userEvent.type(nicknameInput, 'Denis')
    await userEvent.type(messageInput, 'my comment')
    expect(nicknameInput).toHaveValue('Denis')
    expect(messageInput).toHaveValue('my comment')
  }) 

  test('create comment', async () => {
    mockedAxios.get.mockResolvedValue({
      data: []
    })
    render(<Comments open={ true } movieId={0}/>)
    const nicknameInput = screen.getByTestId('nickname-input')
    const messageInput = screen.getByTestId('message-input')
    const button = screen.getByTestId('comment-button')
    await userEvent.type(nicknameInput, 'Denis')
    await userEvent.type(messageInput, 'my comment')
    await userEvent.click(button)
    const message = screen.getByTestId('author')
    const author = screen.getByTestId('message')
    expect(message).toHaveTextContent('Denis')
    expect(author).toHaveTextContent('my comment')
  }) 

  test('delete comment', async () => {
    mockedAxios.get.mockResolvedValue({
      data: []
    })
    render(<Comments movieId={ 25 } open={ true } />)
    const nicknameInput = screen.getByTestId('nickname-input')
    const messageInput = screen.getByTestId('message-input')
    const button = screen.getByTestId('comment-button')
    await userEvent.type(nicknameInput, 'Denis')
    await userEvent.type(messageInput, 'my comment')
    await userEvent.click(button)
    const message = screen.getByTestId('author')
    const author = screen.getByTestId('message')
    expect(message).toHaveTextContent('Denis')
    expect(author).toHaveTextContent('my comment')
    const deleteButton = screen.getByTestId('delete-button')
    await userEvent.click(deleteButton)
    const deletedAuthor = screen.queryByText('Denis')
    const deletedMessage = screen.queryByText('my comment')
    expect(deletedAuthor).toBeNull()
    expect(deletedMessage).toBeNull()
  })
})