from django import forms

class LoginForm(forms.Form):
    username = forms.CharField()
    password = forms.Charfield(widget=forms.PasswordInput)
