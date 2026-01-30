def remove_null_answer(input_path, output_path):
    with open(input_path, 'r', encoding='utf-8') as f:
        text = f.read()

    # "answer": null → "answer":
    text = text.replace('"answer": null', '"answer": ')

    # OR single quotes 대응
    text = text.replace("'answer': null", "'answer': ")

    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(text)


# 실행
remove_null_answer("input.json", "cleaned.json")