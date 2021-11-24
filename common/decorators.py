"""Common decorators"""
from django.http import HttpResponseBadRequest


def ajax_required(fun):
    """Decorator that executes a request only if it is done using AJAX"""

    def wrap(request, *args, **kwargs):
        if not request.is_ajax():
            return HttpResponseBadRequest()
        return fun(request, *args, **kwargs)

    wrap.__doc__ = fun.__doc__
    wrap.__name__ = fun.__name__
    return wrap
