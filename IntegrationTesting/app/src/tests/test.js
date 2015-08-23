export class Test
{
    TestName = "ee";

    activate (model)
    {
        this.TestName = model.TestName;
    }
}