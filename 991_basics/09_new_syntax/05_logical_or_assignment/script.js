console.log('Logical OR Assignment ||=');
{
  const todo = {
    task: 'Finish Editing Course',
  };

  // 左側がfalsyの場合のみ、値をセットする。
  todo.priority ||= 'MEDIUM';
  todo.priority ||= 'HIGH';

  console.log(todo);
}
