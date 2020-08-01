from app.model import Model
class Controller:
    def __init__(self):
        super().__init__()
        self.model = Model()
    def login(self, data):
        return self.model.login(data)