import { useRouter } from "next/router";
import { FormEvent, useState } from "react"
import { useDispatch } from "react-redux";
import Layout from "../components/Layout"
import { Button, FormItem, StyledForm, StyledInput, StyledLabel, StyledTextarea } from "../components/StyledComponents";
import { sendPostsAC } from "../redux/actions/post-actions";

const CreatePage = () => {
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>("");
  const router = useRouter()
  const dispatch = useDispatch();
  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
    dispatch(sendPostsAC(title, body));
    router.push("/")

  }
  return (
    <Layout>
      <StyledForm onSubmit={submitHandler}>
        <FormItem>
          <StyledLabel htmlFor="title">Title</StyledLabel>
          <StyledInput onChange={((e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value))} name="title" type="text" />
        </FormItem>
        <FormItem>
          <StyledLabel htmlFor="body">Body</StyledLabel>
          <StyledTextarea onChange={((e: React.ChangeEvent<HTMLTextAreaElement>) => setBody(e.target.value))} name="body" id="" />
        </FormItem>
        <Button type="submit">Submit</Button>
      </StyledForm>
    </Layout>
  )
}

export default CreatePage
