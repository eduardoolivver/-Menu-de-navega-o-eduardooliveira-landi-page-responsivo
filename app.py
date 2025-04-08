from flask import Flask, jsonify, request
import random

app = Flask(__name__)

goleiro_posicoes = ["esquerda", "direita", "cima", "baixo"]

@app.route('/chutar', methods=['POST'])
def chutar():
    data = request.json
    chute = data.get("direcao")

    goleiro = random.choice(goleiro_posicoes)

    if chute not in goleiro_posicoes:
        return jsonify({"resultado": "Direção inválida!"}), 400

    if chute == goleiro:
        return jsonify({"resultado": "Defesa do goleiro! Você não marcou."}), 200
    else:
        return jsonify({"resultado": "Gol! Você marcou!"}), 200

if __name__ == '__main__':
    app.run(debug=True)
